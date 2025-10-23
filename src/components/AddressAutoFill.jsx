import { AddressAutofill } from "@mapbox/search-js-react";

const AddressAutofillInput = ({ onSelect, accessToken }) => {
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
        <AddressAutofill
            accessToken={accessToken}
            onRetrieve={handleRetrieve}
            options={{ country: ["it"] }}
        >
            <input
                type="text"
                placeholder="Inserisci indirizzo..."
                className="form-control"
                autoComplete="shipping address-line1"
            />
        </AddressAutofill>
    );
};

export default AddressAutofillInput;
