import { useState } from "react";
import AddressAutofillInput from "../components/AddressAutoFill";

const MyForm = () => {
    const [form, setForm] = useState({
        fullAddress: "",
        street: "",
        city: "",
        region: "",
        postcode: "",
        country: "",
        latitude: "",
        longitude: "",
    });

    const handleAddressSelect = (data) => {
        setForm(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container py-4">
            <h4>Indirizzo</h4>
            <AddressAutofillInput
                accessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                onSelect={handleAddressSelect}
            />

            <div className="mt-3">
                <label>Via e numero</label>
                <input
                    name="street"
                    value={form.street}
                    onChange={handleChange}
                    className="form-control"
                />

                <label className="mt-2">Città</label>
                <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="form-control"
                />

                <label className="mt-2">Regione</label>
                <input
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    className="form-control"
                />

                <label className="mt-2">CAP</label>
                <input
                    name="postcode"
                    value={form.postcode}
                    onChange={handleChange}
                    className="form-control"
                />

                <label className="mt-2">Latitudine</label>
                <input
                    name="latitude"
                    value={form.latitude}
                    onChange={handleChange}
                    className="form-control"
                />

                <label className="mt-2">Longitudine</label>
                <input
                    name="longitude"
                    value={form.longitude}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>


        </div>
    );
}
export default MyForm;
