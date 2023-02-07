import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { IHouseholdMember } from "interfaces/household-member.interface";
import { useEffect, useState } from "react";
import HouseholdItem from "./HouseholdItem";

const HouseholdTable = () => {
  const [members, setMembers] = useState<IHouseholdMember[]>([
    {
      id: 1,
      covered: true,
      name: "Jerome Bell",
      nickName: "Rome",
      subscriber: true,
      insurance: "Primary",
      insuranceId: "123-13-1234",
    },
    {
      id: 2,
      covered: true,
      name: "Stacy Bell",
      nickName: "Stacy",
      subscriber: false,
      insurance: "Primary",
      insuranceId: "",
    },
    {
      id: 3,
      covered: false,
      name: "Rebecca Bell",
      nickName: "Becca",
      subscriber: false,
      insurance: "",
      insuranceId: "",
    },
  ]);

  useEffect(() => {
    console.table(members);
  }, [members]);

  return (
    <div className="text-neem-dark-500">
      <h1 className="font-medium mb-3">Household</h1>
      <div>
        <div className="grid grid-cols-10  font-normal gap-4 items-center mb-3 min-w-[800px] overflow-auto">
          {/* Grid Header */}
          <div className="col-span-1 text-sm flex gap-2 items-center">
            <span>Covered</span>
            <InformationCircleIcon className="w-5 h-5 text-neem-dark-300" />
          </div>
          <div className="col-span-3 text-sm">Name</div>
          <div className="col-span-2 text-sm justify-self-center">
            Subscriber
          </div>
          <div className="col-span-2 text-sm">Insurance</div>
          <div className="col-span-2 text-sm">ID</div>
          {/* Grid Header Ends*/}

          {/* Grid Body */}
          {members.map((member) => (
            <HouseholdItem
              key={member.id}
              member={member}
              onChange={(member) => {
                setMembers((currentState) => {
                  return currentState.map((currentMember) => {
                    if (currentMember.id === member.id) {
                      return member;
                    }
                    return currentMember;
                  });
                });
              }}
              setSubscriber={(member) => {
                setMembers((currentState) => {
                  return currentState.map((currentMember) => {
                    if (currentMember.id === member.id) {
                      return { ...currentMember, subscriber: true };
                    }
                    return { ...currentMember, subscriber: false };
                  });
                });
              }}
            />
          ))}
          {/* Grid Body Ends */}
        </div>

        {/* Grid Controls Starts */}
        <div className="flex justify-end">
          <button
            className="text-neem-accent-500 text-sm"
            onClick={() => {


              setMembers((currentState) => {
                return [
                  ...currentState,
                  {
                    id: currentState.length + 1,
                    covered: false,
                    name: `New Member ${currentState.length + 1}`,
                    nickName: `New ${currentState.length + 1}`,
                    subscriber: false,
                    insurance: "",
                    insuranceId: "",
                  },
                ];
              });
            }}
          >
            +Add new member
          </button>
        </div>
        {/* Grid Controls Ends */}
      </div>
    </div>
  );
};

export default HouseholdTable;
