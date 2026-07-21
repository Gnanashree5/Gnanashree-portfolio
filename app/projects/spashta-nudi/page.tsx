import SpashtaHero from "@/components/spashta/SpashtaHero";
import SpashtaProblem from "@/components/spashta/SpashtaProblem";
import SpashtaSolution from "@/components/spashta/SpashtaSolution";
import SpashtaFeatures from "@/components/spashta/SpashtaFeatures";
import SpashtaValidation from "@/components/spashta/SpashtaValidation";
import SpashtaEngineering from "@/components/spashta/SpashtaEngineering";
import SpashtaImpact from "@/components/spashta/SpashtaImpact";
import SpashtaSnapshot from "@/components/spashta/SpashtaSnapshot";

export default function SpashtaNudiPage() {
    return (
        <main>
            <SpashtaHero />
            <SpashtaSnapshot />
            <SpashtaProblem />
            <SpashtaSolution />
            <SpashtaFeatures />
            <SpashtaValidation />
            <SpashtaEngineering />
            <SpashtaImpact />
        </main>
    );
}