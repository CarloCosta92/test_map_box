import { useState } from "react";
import { AddressAutofill } from "@mapbox/search-js-react";
import { GeoAltFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const AddressAutofillInput = ({ onSelect, accessToken, label = "Indirizzo" }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleRetrieve = (e) => {
        const feature = e.features?.[0];
        if (!feature) return;

        const props = feature.properties || {};
        const context = feature.context || [];


        const getContext = (idPart) =>
            context.find((c) => c.id.includes(idPart))?.text || "";


        const data = {
            full_address: props.full_address || feature.place_name || "",
            address: props.street || feature.text || "",
            street_number: props.address_number || props.address || "",
            postal_code: props.postcode || getContext("postcode"),
            hamlet: props.locality || getContext("locality"),
            city: props.place || props.address_level2 || getContext("place"),
            province: props.region || props.address_level1 || getContext("region"),
            nation: props.country || getContext("country"),
            lng: feature.geometry?.coordinates?.[0] || null,
            lat: feature.geometry?.coordinates?.[1] || null,
            alt: null,
            meta_source: feature,
        };

        console.log("Dati Mapbox:", feature);
        console.log("Dati per il database:", data);

        onSelect(data);
    };


    return (
        <div className="mb-3">
            {label && <label className="form-label fw-semibold">{label}</label>}
            <AddressAutofill
                accessToken={accessToken}
                onRetrieve={handleRetrieve}
                options={{ country: "it" }}
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
