import { Menu } from "@/components/Menu";
import WhyAIChangesTheEquation from "./why-ai-changes-the-equation";
import WearingAllThreeHats from "./wearing-all-three-hats";
import AsProductManager from "./product-manager";
import AsDesigner from "./designer";
import AsEngineer from "./engineer";
import { Banner } from "./banner";

export default function Page() {
    return (
        <>
            <Menu />
            <WhyAIChangesTheEquation />
            <WearingAllThreeHats />
            <Banner />
            <AsProductManager />
            <AsDesigner />
            <AsEngineer />
        </>
    );
}