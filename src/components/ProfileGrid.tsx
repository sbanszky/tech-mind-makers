import { LeaderProfile } from "./LeaderProfile";
import { leaders } from "@/data/leaders";

export const ProfileGrid = () => {
  return (
    <section className="research-section">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Tech Leader Profiles</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <LeaderProfile key={leader.id} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
