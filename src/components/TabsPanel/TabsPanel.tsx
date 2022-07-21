import React, { memo, useState } from 'react'
import { GenderCategory } from '../../firebase/models/GenderCategory'
import { StyledMenuLink } from '../StyledLink/StyledLink.styled'
import { Tabs } from '../Tabs/Tabs'

const tabsCategories = [
    { id: 'fdhher', name: 'Woman', searchQuery: 'womens' },
    { id: 'fdgjhjktyhher', name: 'Man', searchQuery: 'Mens' }
]

export const TabsPanel = memo(() => {
    const [activeTab, setActiveTab] = useState(0)
    console.log('render tabsPanel');
    
    const handleLinkClick = (tabPosition: number) => {
        setActiveTab(tabPosition)
    }
    const renderItemTabs = (item: GenderCategory, index: number, active: boolean) =>
        <StyledMenuLink
            to={'#'}
            onClick={() => handleLinkClick(index)}
            className={active ? 'active' : ''}
        >
            {item.name}
        </StyledMenuLink>

    return (
        <Tabs
            categories={tabsCategories}
            renderItem={renderItemTabs}
            value={activeTab}
        />
    )
})
