import { type } from "os";
import React from "react";

type RoleCardProps = {
  key: number;
  name: string;
  description: string;
  background_image: string;
};

function RolesCard({
  name,
  background_image,
  description,
  key,
}: RoleCardProps) {
  return (
    <div key={key} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
      <div className="h-full max-w-sm lg:max-w-none mx-auto py-10 px-8 bg-white rounded-2xl">
        <h4 className="text-3xl font-medium mb-2">{name}</h4>
        <p className="max-w-2xs mb-10 pr-10">{description}</p>
        <a
          className="group relative inline-block h-16 w-full bg-blueGray-900 rounded"
          href={"mailto:hello@tadamun.xyz?subject=Interest in " + name}
        >
          <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
            <div className="flex h-full w-full items-center justify-center bg-white border-2 border-blueGray-900 rounded">
              <span className="text-base font-semibold uppercase">
                Join us!
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default RolesCard;
