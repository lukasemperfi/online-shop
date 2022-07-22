import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GenderCategory } from '../../firebase/models/GenderCategory'
import { StyledMenuLink } from '../StyledLink/StyledLink.styled'
import { Tabs } from '../Tabs/Tabs'

const tabsCategories = [
    { id: 'fdhher', name: 'Woman', searchQuery: 'womens' },
    { id: 'fdgjhjktyhher', name: 'Man', searchQuery: 'mens' }
]

export const TabsPanel = memo(() => {
    const [activeTab, setActiveTab] = useState<number | undefined>()
    const { gender } = useParams()

    const handleLinkClick = (tabPosition: number) => {
        setActiveTab(tabPosition)
    }

    useEffect(() => {
        if (gender) {
         const tabIndex = tabsCategories?.findIndex(item => item.searchQuery === gender)
            
         setActiveTab(tabIndex)
        }
    }, [])

    const renderItemTabs = (item: GenderCategory, index: number, active: boolean) =>
        <StyledMenuLink
            to={`/${item.searchQuery}`}
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
