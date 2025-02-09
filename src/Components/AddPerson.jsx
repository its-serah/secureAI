import { useState } from "react";
import { useField } from "../Hooks/hooks";
import Input from "./Input";
import Selector from "./Selector";
import { useMutation } from "@tanstack/react-query"
import { addPerson } from "../Services/person"
import { useNavigate } from "react-router-dom";

const AddPerson = () => {
  const [gender, setGender] = useState('Female');
  const firstNameField = useField("text");
  const lastNameField = useField("text");
  const birthDateField = useField("date");
  const emailField = useField("email");
  const floorField = useField("number");
  const [orientation, setOrientation] = useState('R');
  const [relationshipStatus, setRelationshipStatus] = useState('Single');
  const kidsField = useField('number');
  const workField = useField("text");
  const navigate = useNavigate();

  const addPersonMutation = useMutation({
    mutationFn: addPerson,
    onSuccess: () => {
      resetForm();
      navigate("/people");
    },
  });

  const resetForm = () => {
    firstNameField.reset();
    lastNameField.reset();
    birthDateField.reset();
    emailField.reset();
    floorField.reset();
    kidsField.reset();
    workField.reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPersonMutation.mutate({
      firstName: firstNameField.value,
      lastName: lastNameField.value,
      age: new Date().getFullYear() - new Date(birthDateField.value).getFullYear(),
      floor: floorField.value,
      orientation,
      relationship: relationshipStatus,
      kids: kidsField ? kidsField.value : 0 ,
      gender,
      email: emailField.value,
      work: workField.value,
      photos: [
        "https://media.licdn.com/dms/image/v2/D4E03AQGawkIL3VPrmg/profile-displayphoto-shrink_400_400/B4EZTVjqNZGgAg-/0/1738749683198?e=1744243200&v=beta&t=gry8luIfd6p-diyL2ji_bM1FgyXQ9W9I6sGQhnYmKKU",
      ], //temp dummy photo
    });
  };

  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 border-b border-gray-300 h-85 min-h-fit w-full flex flex-wrap flex-row p-4 box-border">
        <h1 className="lg:text-8xl sm:mt-14 text-7xl text-gray-700 font-extrabold font-stretch-expanded self-end">
          Add Person
        </h1>
      </div>
      <div className="flex flex-col w-3/4 md:w-1/2 align-middle justify-center mx-auto min-h-128 max-h-fit">
        <div className="h-70 w-full bg-blue-200 mx-auto border-4 mt-10 border-blue-400 rounded-2xl"></div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Input label="First Name" {...firstNameField} />
          <Input label="Last Name" {...lastNameField} />
          <Input label="Date of Birth" type="date" {...birthDateField} />
          <Selector label="Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </Selector>
          <Input label="Email" type="email" {...emailField} />
          <Input label="Floor" {...floorField} />
          <Selector label="Orientation" value={orientation} onChange={(e) => setOrientation(e.target.value)}>
            <option value="R">Right</option>
            <option value="L">Left</option>
          </Selector>
          <Selector label="Relationship" value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)}>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </Selector>
          {relationshipStatus.toLowerCase() === "married" && <Input label="Kids" {...kidsField} />}
          <Input label="Work" {...workField} />
          <div className="flex flex-row align-middle justify-center gap-4">
            <button
              className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
              type="submit"
            >
              Add
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                resetForm();
              }}
              className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
              type="button"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPerson;