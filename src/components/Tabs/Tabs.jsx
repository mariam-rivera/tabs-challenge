import { useState } from "react"
import { TabContent } from "./TabContent";
import { TabNavItem } from "./TabNavItem";

export const Tabs = () => {
   const [activeTab, setActiveTab] = useState("tab1");
   return(
        <div className="tabs">
            <ul className="nav">
                <TabNavItem title="Summary" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Specifications" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Features" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Refunds and returns" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>
            <div className="content-tab">
                <TabContent id="tab1" activeTab={activeTab}>
                    <p>Velit sit incididunt proident nulla sint commodo ullamco aliquip in enim ad id. Est enim nostrud laborum excepteur id labore ad nisi exercitation amet. Consequat dolor ad cupidatat exercitation velit amet et voluptate aliquip cupidatat non.</p>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <p>Deserunt anim sunt tempor consectetur sint quis ex enim est anim officia sit et nostrud. Excepteur ex laboris ad elit velit esse mollit mollit amet irure enim. Sint anim in voluptate nisi ullamco Lorem nisi laborum incididunt veniam esse elit. Voluptate laborum dolor incididunt dolore velit cillum ex dolor ipsum do esse occaecat.</p>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <p>Magna sint consectetur ea ipsum. Ut commodo duis reprehenderit dolor velit non duis consectetur magna sit consectetur esse adipisicing ea. Id quis nulla Lorem fugiat dolore non irure cupidatat nisi cillum irure eiusmod. Nisi nostrud excepteur aute irure culpa officia ea magna ea incididunt ad. Ut do nulla excepteur incididunt nulla quis labore exercitation ad voluptate. Officia culpa ipsum magna esse est enim exercitation proident qui veniam eiusmod in. Dolore aliquip laboris laboris id consectetur irure.</p>
                </TabContent>
                <TabContent id="tab4" activeTab={activeTab}>
                    <p>Consectetur do sit ex velit. Officia deserunt minim id pariatur adipisicing dolor culpa do ut excepteur. Irure ea ut occaecat ex occaecat. Magna labore dolor nostrud proident qui ex ut sit incididunt do reprehenderit. Elit aliqua velit tempor commodo veniam magna est nisi ipsum officia. Duis esse reprehenderit ad occaecat veniam incididunt enim. Exercitation aliqua voluptate eiusmod quis commodo.</p>
                </TabContent>
            </div>
        </div>
    )
}