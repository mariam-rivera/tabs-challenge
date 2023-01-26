export const TabNavItem = ({id, title, activeTab, setActiveTab}) => {
    const handleActiveTab = () => {
        setActiveTab(id)
    }
    return (
        <li onClick={handleActiveTab} className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    )
}