import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
            {items.map(item => (
                <li key={item.id}>
                    <strong>Name:</strong> {item.first_name} {item.last_name}<br />
                        <strong>Middle Name:</strong> {item.middle_name}<br />
                        <strong>Address:</strong> {item.address}<br />
                        <strong>Birthday:</strong> {item.birthday}<br />
                        <strong>Email:</strong> {item.email}<br />
                        <strong>Contact Number:</strong> {item.contact_no}<br />
                        <strong>Employment Status:</strong> {item.employment_status}<br />
                        <strong>Date of Birth:</strong> {item.date_of_birth}<br />
                        <strong>Place of Birth:</strong> {item.place_of_birth}<br />
                        <strong>Sex:</strong> {item.sex}<br />
                        <strong>Civil Status:</strong> {item.civil_status}<br />
                        <strong>Height:</strong> {item.height_m}m<br />
                        <strong>Weight:</strong> {item.weight_kg}kg<br />
                        <strong>Blood Type:</strong> {item.blood_type}<br />
                        <strong>GSIS No.:</strong> {item.gsis_no}<br />
                        <strong>PAGIBIG No.:</strong> {item.pagibig_no}<br />
                        <strong>PhilHealth No.:</strong> {item.philhealth_no}<br />
                        <strong>SSS No.:</strong> {item.sss_no}<br />
                        <strong>TIN No.:</strong> {item.tin_no}<br />
                        <strong>Agency Employer:</strong> {item.agency_em}<br />
                        <strong>Citizenship:</strong> {item.citizenship}<br />
                        <strong>Residential Address:</strong> {item.residential_house_no} {item.residential_street}, {item.residential_subd}, {item.residential_brgy}, {item.residential_city}, {item.residential_province} {item.residential_zipcode}<br />
                        <strong>Permanent Address:</strong> {item.permanent_house_no} {item.permanent_street}, {item.permanent_subd}, {item.permanent_brgy}, {item.permanent_city}, {item.permanent_province} {item.permanent_zipcode}<br />
                        <strong>Telephone:</strong> {item.telephone}<br />
                        <strong>Mobile Number:</strong> {item.mobile_number}<br />
                        <strong>Spouse Name:</strong> {item.spouse_surname}, {item.spouse_first_name} {item.spouse_middle_name} {item.spouse_name_ext}<br />
                        <strong>Spouse Occupation:</strong> {item.spouse_occupation}<br />
                        <strong>Spouse Employer:</strong> {item.spouse_employer}<br />
                        <strong>Spouse Business Address:</strong> {item.spouse_business_address}<br />
                        <strong>Spouse Telephone:</strong> {item.spouse_telephone}<br />
                        <strong>Elementary Education:</strong> {item.elementary_education}<br />
                        <strong>Secondary Education:</strong> {item.secondary_education}<br />
                        <strong>Father Name:</strong> {item.father_surname}, {item.father_first_name} {item.father_middle_name} {item.father_name_ext}<br />
                        <strong>Mother Name:</strong> {item.mother_surname}, {item.mother_first_name} {item.mother_middle_name}<br />
                    
                    <button onClick={() =>
           onEdit(item)}>Edit</button>  
           <button onClick={() =>
           onDelete(item.id)}>Delete</button>
           </li>
           ))}       
           </ul>
           
           </div>
           
         );
    };

export default ItemList;