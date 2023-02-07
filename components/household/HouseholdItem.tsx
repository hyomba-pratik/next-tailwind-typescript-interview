import { UserCircleIcon } from "@heroicons/react/24/solid";
import { isValidSSN } from "helper/ssn";
import { IHouseholdMember } from "interfaces/household-member.interface";
import React, { useEffect, useState } from "react";

interface IHouseholdItemProps {
  member: IHouseholdMember;
  onChange: (member: IHouseholdMember) => void;
  setSubscriber: (member: IHouseholdMember) => void;
}

const HouseholdItem: React.FC<IHouseholdItemProps> = ({
  member,
  onChange,
  setSubscriber,
}) => {
  const [validSSN, setValidSSN] = useState<boolean>(false);

  useEffect(() => {
    if (member.insuranceId) {
      setValidSSN(isValidSSN(member.insuranceId));
    }
  }, [member]);

  return (
    <>
      <div className="col-span-1 flex items-center justify-center ">
        <input
          type="checkbox"
          className="w-1.125 h-1.125 accent-neem-accent-500  "
          checked={member.covered}
          onChange={(e) => {
            onChange({ ...member, covered: e.target.checked });
          }}
        />
      </div>
      <div className="flex gap-2 col-span-3 items-center">
        <div>
          <UserCircleIcon className="w-6 h-6" />
        </div>
        <div>{member.name}</div>
        <div className="text-neem-dark-300">({member.nickName})</div>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <input
          type="radio"
          className="w-1.125 h-1.125 accent-neem-accent-500"
          checked={member.subscriber}
          onChange={(e) => {
            onChange({ ...member, subscriber: e.target.checked });
            if (e.target.checked) {
              setSubscriber(member);
            }
          }}
        />
      </div>
      <div className="col-span-2">
        <div className={"border border-neem-gray-500 p-3 rounded-md w-full"}>
          <select
            name="insurance"
            id="insurance-input"
            className="w-full focus-visible:outline-none "
            defaultValue={member.insurance}
            onChange={(e) => {
              onChange({ ...member, insurance: e.target.value });
            }}
          >
            <option value=""></option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
          </select>
        </div>
      </div>
      <div className="col-span-2">
        <input
          type="text"
          placeholder="Ins. ID/SSN"
          className={`border border-neem-gray-500 p-3 rounded-md w-full ${
            !validSSN && member.insuranceId && " border-red-400"
          }`}
          value={member.insuranceId}
          onChange={(e) => {
            const input = e.target.value;

            setValidSSN(isValidSSN(input));

            onChange({ ...member, insuranceId: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default HouseholdItem;
