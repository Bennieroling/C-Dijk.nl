import Advies from "./advies";
import Hr from "./hr";
import Toezicht from "./toezicht";

const Services = () => {
  return (
    <section>
      <h2 className="color-effect p-8 text-center text-4xl font-bold">Services</h2>
      {/* <SingleService
        side="left"
        title="Counseling"
        description="Organizational advice is tailor-made, aimed at the specific question of the company or organization, with a personal approach."
      />
      <SingleService
        side="right"
        title="People & Talent"
        description="As an HR advisor, both the person behind the employee and the interests of the company are important. The entire spectrum of personnel care, policy and legal aspect."
      /> */}
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        <Advies />
        <Hr />
        <Toezicht />
      </div>
    </section>
  );
};

export default Services;
