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
        <div className="container py-5">
            <div className="card shadow-sm p-4">
                <h4 className="mb-3 text-primary">Indirizzo</h4>


                <AddressAutofillInput
                    accessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                    onSelect={handleAddressSelect}
                />


                <div className="row mt-3">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Via e numero</label>
                        <input
                            name="street"
                            value={form.street}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Città</label>
                        <input
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Regione</label>
                        <input
                            name="region"
                            value={form.region}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">CAP</label>
                        <input
                            name="postcode"
                            value={form.postcode}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Latitudine</label>
                        <input
                            name="latitude"
                            value={form.latitude}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Longitudine</label>
                        <input
                            name="longitude"
                            value={form.longitude}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyForm;
