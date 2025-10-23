import { useState } from "react";
import { AddressAutofill } from "@mapbox/search-js-react";
import { GeoAltFill } from "react-bootstrap-icons"; // icona mappa
import "bootstrap/dist/css/bootstrap.min.css";

const AddressAutofillInput = ({ onSelect, accessToken, label = "Indirizzo" }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleRetrieve = (e) => {
        const result = e.features[0];
        if (!result) return;

        const context = result.context || [];
        const props = result.properties || {};

        const data = {
            fullAddress: result.place_name,
            street: props.address_line1 || "",
            city: props.place || context.find(c => c.id.includes("place"))?.text || "",
            region: props.region || context.find(c => c.id.includes("region"))?.text || "",
            postcode: props.postcode || context.find(c => c.id.includes("postcode"))?.text || "",
            country: props.country || context.find(c => c.id.includes("country"))?.text || "",
            latitude: result.geometry.coordinates[1],
            longitude: result.geometry.coordinates[0],
        };

        onSelect?.(data);
    };

    return (
        <div className="mb-3">
            {label && <label className="form-label fw-semibold">{label}</label>}
            <AddressAutofill
                accessToken={accessToken}
                onRetrieve={handleRetrieve}
                options={{ country: ["it"] }}
            >
                <div
                    className={`input-group shadow-sm rounded-3 border ${isFocused ? "border-primary" : "border-light"
                        }`}
                >
                    <span className="input-group-text bg-white border-0">
                        <GeoAltFill className="text-primary" />
                    </span>
                    <input
                        type="text"
                        placeholder="Cerca indirizzo..."
                        className="form-control border-0 py-2"
                        autoComplete="shipping address-line1"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
            </AddressAutofill>
            <small className="text-muted d-block mt-1">
                Inizia a digitare un indirizzo per ottenere suggerimenti automatici
            </small>
        </div>
    );
};

export default AddressAutofillInput;
