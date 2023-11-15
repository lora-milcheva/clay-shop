import { useState } from "react";


const TabGroup = (props) => {
    const { tabsData } = props
    const [activeTab, setActiveTab] = useState(tabsData[0].id)

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

            {tabsData.map((el, index) =>
                <div id={el.id}
                     className={activeTab === el.id ? "tab__content visible" : "tab__content"}
                     key={el.content + 'key' + index}>
                    <p>{el.content}</p>
                </div>
            )}
        </div>
    )
}

export default TabGroup