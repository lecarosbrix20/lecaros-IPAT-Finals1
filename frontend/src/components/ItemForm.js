import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemForm.css';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [description, setDescription] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [nameExt, setNameExt] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [heightM, setHeightM] = useState('');
    const [weightKg, setWeightKg] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [gsisNo, setGsisNo] = useState('');
    const [pagibigNo, setPagibigNo] = useState('');
    const [philhealthNo, setPhilhealthNo] = useState('');
    const [sssNo, setSssNo] = useState('');
    const [tinNo, setTinNo] = useState('');
    const [agencyEm, setAgencyEm] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [residentialHouseNo, setResidentialHouseNo] = useState('');
    const [residentialStreet, setResidentialStreet] = useState('');
    const [residentialSubd, setResidentialSubd] = useState('');
    const [residentialBrgy, setResidentialBrgy] = useState('');
    const [residentialCity, setResidentialCity] = useState('');
    const [residentialProvince, setResidentialProvince] = useState('');
    const [residentialZipcode, setResidentialZipcode] = useState('');
    const [permanentHouseNo, setPermanentHouseNo] = useState('');
    const [permanentStreet, setPermanentStreet] = useState('');
    const [permanentSubd, setPermanentSubd] = useState('');
    const [permanentBrgy, setPermanentBrgy] = useState('');
    const [permanentCity, setPermanentCity] = useState('');
    const [permanentProvince, setPermanentProvince] = useState('');
    const [permanentZipcode, setPermanentZipcode] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [spouseSurname, setSpouseSurname] = useState('');
    const [spouseFirstName, setSpouseFirstName] = useState('');
    const [spouseMiddleName, setSpouseMiddleName] = useState('');
    const [spouseNameExt, setSpouseNameExt] = useState('');
    const [spouseOccupation, setSpouseOccupation] = useState('');
    const [spouseEmployer, setSpouseEmployer] = useState('');
    const [spouseBusinessAddress, setSpouseBusinessAddress] = useState('');
    const [spouseTelephone, setSpouseTelephone] = useState('');
    const [elementaryEducation, setElementaryEducation] = useState('');
    const [secondaryEducation, setSecondaryEducation] = useState('');
    const [fatherSurname, setFatherSurname] = useState('');
    const [fatherFirstName, setFatherFirstName] = useState('');
    const [fatherMiddleName, setFatherMiddleName] = useState('');
    const [fatherNameExt, setFatherNameExt] = useState('');
    const [motherSurname, setMotherSurname] = useState('');
    const [motherFirstName, setMotherFirstName] = useState('');
    const [motherMiddleName, setMotherMiddleName] = useState('');
    

    const generateRandomBirthday = () => {
      const start = new Date(1970, 0, 1); // Starting date
      const end = new Date(); // Current date
      const birthday = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      return birthday.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };
  
    // Initialize birthday state with the generated random birthday
    useEffect(() => {
      setBirthday(generateRandomBirthday());
    }, []);
  

  useEffect(() => {
    if (item) {
        setFirstName(item.first_name || '');
        setMiddleName(item.middle_name || '');
        setLastName(item.last_name || '');
        setAddress(item.address || '');
        setBirthday(item.birthday || '');
        setEmail(item.email || '');
        setContactNo(item.contact_no || '');
        setDescription(item.description || '');
        setEmploymentStatus(item.employment_status || '');
        setNameExt(item.name_ext || '');
        setDateOfBirth(item.date_of_birth || '');
        setPlaceOfBirth(item.place_of_birth || '');
        setSex(item.sex || '');
        setCivilStatus(item.civil_status || '');
        setHeightM(item.height_m || '');
        setWeightKg(item.weight_kg || '');
        setBloodType(item.blood_type || '');
        setGsisNo(item.gsis_no || '');
        setPagibigNo(item.pagibig_no || '');
        setPhilhealthNo(item.philhealth_no || '');
        setSssNo(item.sss_no || '');
        setTinNo(item.tin_no || '');
        setAgencyEm(item.agency_em || '');
        setCitizenship(item.citizenship || '');
        setResidentialHouseNo(item.residential_house_no || '');
        setResidentialStreet(item.residential_street || '');
        setResidentialSubd(item.residential_subd || '');
        setResidentialBrgy(item.residential_brgy || '');
        setResidentialCity(item.residential_city || '');
        setResidentialProvince(item.residential_province || '');
        setResidentialZipcode(item.residential_zipcode || '');
        setPermanentHouseNo(item.permanent_house_no || '');
        setPermanentStreet(item.permanent_street || '');
        setPermanentSubd(item.permanent_subd || '');
        setPermanentBrgy(item.permanent_brgy || '');
        setPermanentCity(item.permanent_city || '');
        setPermanentProvince(item.permanent_province || '');
        setPermanentZipcode(item.permanent_zipcode || '');
        setTelephone(item.telephone || '');
        setMobileNumber(item.mobile_number || '');
        setSpouseSurname(item.spouse_surname || '');
        setSpouseFirstName(item.spouse_first_name || '');
        setSpouseMiddleName(item.spouse_middle_name || '');
        setSpouseNameExt(item.spouse_name_ext || '');
        setSpouseOccupation(item.spouse_occupation || '');
        setSpouseEmployer(item.spouse_employer || '');
        setSpouseBusinessAddress(item.spouse_business_address || '');
        setSpouseTelephone(item.spouse_telephone || '');
        setElementaryEducation(item.elementary_education || '');
        setSecondaryEducation(item.secondary_education || '');
        setFatherSurname(item.father_surname || '');
        setFatherFirstName(item.father_first_name || '');
        setFatherMiddleName(item.father_middle_name || '');
        setFatherNameExt(item.father_name_ext || '');
        setMotherSurname(item.mother_surname || '');
        setMotherFirstName(item.mother_first_name || '');
        setMotherMiddleName(item.mother_middle_name || '');
        
    }
  }, [item]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { 
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        address: address,
        birthday: birthday,
        email: email,
        contact_no: contactNo,
        description: description,
        employment_status: employmentStatus,
        name_ext: nameExt,
        date_of_birth: dateOfBirth,
        place_of_birth: placeOfBirth,
        sex: sex,
        civil_status: civilStatus,
        height_m: heightM,
        weight_kg: weightKg,
        blood_type: bloodType,
        gsis_no: gsisNo,
        pagibig_no: pagibigNo,
        philhealth_no: philhealthNo,
        sss_no: sssNo,
        tin_no: tinNo,
        agency_em: agencyEm,
        citizenship: citizenship,
        residential_house_no: residentialHouseNo,
        residential_street: residentialStreet,
        residential_subd: residentialSubd,
        residential_brgy: residentialBrgy,
        residential_city: residentialCity,
        residential_province: residentialProvince,
        residential_zipcode: residentialZipcode,
        permanent_house_no: permanentHouseNo,
        permanent_street: permanentStreet,
        permanent_subd: permanentSubd,
        permanent_brgy: permanentBrgy,
        permanent_city: permanentCity,
        permanent_province: permanentProvince,
        permanent_zipcode: permanentZipcode,
        telephone: telephone,
        mobile_number: mobileNumber,
        spouse_surname: spouseSurname,
        spouse_first_name: spouseFirstName,
        spouse_middle_name: spouseMiddleName,
        spouse_name_ext: spouseNameExt,
        spouse_occupation: spouseOccupation,
        spouse_employer: spouseEmployer,
        spouse_business_address: spouseBusinessAddress,
        spouse_telephone: spouseTelephone,
        elementary_education: elementaryEducation,
        secondary_education: secondaryEducation,
        father_surname: fatherSurname,
        father_first_name: fatherFirstName,
        father_middle_name: fatherMiddleName,
        father_name_ext: fatherNameExt,
        mother_surname: motherSurname,
        mother_first_name: motherFirstName,
        mother_middle_name: motherMiddleName,
       

    };

    try {
      if (item) {
        await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
      } else {
        await axios.post('http://localhost:8000/api/items/', data);
      }
      onSuccess();
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <form  className="item-form" onSubmit={handleSubmit}>
      <div>
    
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required // Add required attribute for validation
        />
      </div>
      <div>
        <label>Middle Name:</label>
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required // Add required attribute for validation
        />
      </div>
      <div>
        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required // Add required attribute for validation
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // Add required attribute for validation
        />
      </div>
       <div>
        <label>Birthday:</label>
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
        <button type="button" onClick={() => setBirthday(generateRandomBirthday())}>
          Choose Birthday
        </button>
      </div>
      <div>
        <label>Contact No.</label>
        <input
          type="text"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          required // Add required attribute for validation
        />
      </div>
      <div>
            <label>Employment Status:</label>
            <input
                type="text"
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Name Extension:</label>
            <input
                type="text"
                value={nameExt}
                onChange={(e) => setNameExt(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Date of Birth:</label>
            <input
                type="text"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Place of Birth:</label>
            <input
                type="text"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Sex:</label>
            <input
                type="text"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Civil Status:</label>
            <input
                type="text"
                value={civilStatus}
                onChange={(e) => setCivilStatus(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Height (m):</label>
            <input
                type="text"
                value={heightM}
                onChange={(e) => setHeightM(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Weight (kg):</label>
            <input
                type="text"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Blood Type:</label>
            <input
                type="text"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>GSIS No.:</label>
            <input
                type="text"
                value={gsisNo}
                onChange={(e) => setGsisNo(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>PAGIBIG No.:</label>
            <input
                type="text"
                value={pagibigNo}
                onChange={(e) => setPagibigNo(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Philhealth No.:</label>
            <input
                type="text"
                value={philhealthNo}
                onChange={(e) => setPhilhealthNo(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>SSS No.:</label>
            <input
                type="text"
                value={sssNo}
                onChange={(e) => setSssNo(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>TIN No.:</label>
            <input
                type="text"
                value={tinNo}
                onChange={(e) => setTinNo(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Agency Employment:</label>
            <input
                type="text"
                value={agencyEm}
                onChange={(e) => setAgencyEm(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Citizenship:</label>
            <input
                type="text"
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Residential House No.:</label>
            <input
                type="text"
                value={residentialHouseNo}
                onChange={(e) => setResidentialHouseNo(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Residential Street:</label>
            <input
                type="text"
                value={residentialStreet}
                onChange={(e) => setResidentialStreet(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Residential Subdivision:</label>
            <input
                type="text"
                value={residentialSubd}
                onChange={(e) => setResidentialSubd(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Residential Barangay:</label>
            <input
                type="text"
                value={residentialBrgy}
                onChange={(e) => setResidentialBrgy(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Residential City:</label>
            <input
                type="text"
                value={residentialCity}
                onChange={(e) => setResidentialCity(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Residential Province:</label>
            <input
                type="text"
                value={residentialProvince}
                onChange={(e) => setResidentialProvince(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Residential Zipcode:</label>
            <input
                type="text"
                value={residentialZipcode}
                onChange={(e) => setResidentialZipcode(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Permanent House No.:</label>
            <input
                type="text"
                value={permanentHouseNo}
                onChange={(e) => setPermanentHouseNo(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Permanent Street:</label>
            <input
                type="text"
                value={permanentStreet}
                onChange={(e) => setPermanentStreet(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Permanent Subdivision:</label>
            <input
                type="text"
                value={permanentSubd}
                onChange={(e) => setPermanentSubd(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Permanent Barangay:</label>
            <input
                type="text"
                value={permanentBrgy}
                onChange={(e) => setPermanentBrgy(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Permanent City:</label>
            <input
                type="text"
                value={permanentCity}
                onChange={(e) => setPermanentCity(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Permanent Province:</label>
            <input
                type="text"
                value={permanentProvince}
                onChange={(e) => setPermanentProvince(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Permanent Zipcode:</label>
            <input
                type="text"
                value={permanentZipcode}
                onChange={(e) => setPermanentZipcode(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Telephone:</label>
            <input
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Mobile Number:</label>
            <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse Surname:</label>
            <input
                type="text"
                value={spouseSurname}
                onChange={(e) => setSpouseSurname(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse First Name:</label>
            <input
                type="text"
                value={spouseFirstName}
                onChange={(e) => setSpouseFirstName(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse Middle Name:</label>
            <input
                type="text"
                value={spouseMiddleName}
                onChange={(e) => setSpouseMiddleName(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse Name Extension:</label>
            <input
                type="text"
                value={spouseNameExt}
                onChange={(e) => setSpouseNameExt(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse Occupation:</label>
            <input
                type="text"
                value={spouseOccupation}
                onChange={(e) => setSpouseOccupation(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse Employer:</label>
            <input
                type="text"
                value={spouseEmployer}
                onChange={(e) => setSpouseEmployer(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse Business Address:</label>
            <input
                type="text"
                value={spouseBusinessAddress}
                onChange={(e) => setSpouseBusinessAddress(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Spouse Telephone:</label>
            <input
                type="text"
                value={spouseTelephone}
                onChange={(e) => setSpouseTelephone(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Elementary Education:</label>
            <input
                type="text"
                value={elementaryEducation}
                onChange={(e) => setElementaryEducation(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Secondary Education:</label>
            <input
                type="text"
                value={secondaryEducation}
                onChange={(e) => setSecondaryEducation(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Father's Surname:</label>
            <input
                type="text"
                value={fatherSurname}
                onChange={(e) => setFatherSurname(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Father's First Name:</label>
            <input
                type="text"
                value={fatherFirstName}
                onChange={(e) => setFatherFirstName(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Father's Middle Name:</label>
            <input
                type="text"
                value={fatherMiddleName}
                onChange={(e) => setFatherMiddleName(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Mother's Surname:</label>
            <input
                type="text"
                value={motherSurname}
                onChange={(e) => setMotherSurname(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Mother's First Name:</label>
            <input
                type="text"
                value={motherFirstName}
                onChange={(e) => setMotherFirstName(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
        <div>
            <label>Mother's Middle Name:</label>
            <input
                type="text"
                value={motherMiddleName}
                onChange={(e) => setMotherMiddleName(e.target.value)}
                // Add any necessary attributes or props
            />
        </div>
     
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
