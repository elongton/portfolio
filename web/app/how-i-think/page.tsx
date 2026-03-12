import { Menu } from "@/components/Menu";
import WhyAIChangesTheEquation from "./why-ai-changes-the-equation";
import AsProductManager from "./product-manager";
import AsDesigner from "./designer";
import AsEngineer from "./engineer";
import { Banner } from "./banner";

export default function Page() {
    return (
        <>
            <Menu />
            <WhyAIChangesTheEquation />
            <Banner />
            <AsProductManager />
            <AsDesigner />
            <AsEngineer />
        </>
    );
}
