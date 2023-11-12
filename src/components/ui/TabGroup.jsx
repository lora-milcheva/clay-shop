import { useEffect, useState } from "react";


const TabGroup = ({ tabsData }) => {
    const [activeTab, setActiveTab] = useState()

    useEffect(() => {
        setActiveTab(tabsData[0].id)
    }, [tabsData])

    const handleTabClick = (tabId) => {
        setActiveTab(tabId)
    }

    return (
        <div className='tabs'>
            <div className="tab__navigation">
                {tabsData.map(el =>
                    <button className={activeTab === el.id ? "tab__link active" : "tab__link"}
                            onClick={() => handleTabClick(el.id)}
                            key={el.id}>{el.id}
                    </button>)}
            </div>

            {tabsData.map(el =>
                <div id={el.id} className={activeTab === el.id ? "tab__content visible" : "tab__content"}>
                    <p>{el.content}</p>
                </div>
            )}
        </div>
    )
}

export default TabGroup