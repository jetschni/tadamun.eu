import { getRoleData } from "@/lib/dataConnector";
import React from "react";
import RolesCard from "./Roles/RolesCard";
import { Role } from "@/typings";

type RoleProps = {
  data: Array<Role>;
};

function Roles({ data }: RoleProps) {
  return (
    <section className="py-20 md:py-40 bg-black text-white" id="roles">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mb-32">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading font-semibold mb-12">
            Roles
          </h1>
          <p className="text-2xl">
            Ready? Join our talent pool in a few clicks! Are you ready? In a few
            clicks you can join our talent pool!
          </p>
        </div>
        <div className="flex flex-wrap -mx-3 -mb-6 text-black">
          {data.map((item, index) => (
            <RolesCard
              key={index}
              name={item.name}
              description={item.description}
              background_image={item.background_image}
            />
          ))}
        </div>
        <div className="text-center mt-10 text-xl">
          Looking for a different role? <br />
          <a href="" className="underline hover:no-underline">
            Still, you can join our talent pool.
          </a>
        </div>
      </div>
    </section>
  );
}

export default Roles;
