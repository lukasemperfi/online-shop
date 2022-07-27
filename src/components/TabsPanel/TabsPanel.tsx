import React, { FC, memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { css } from 'styled-components'
import { GenderCategory } from '../../firebase/models/GenderCategory'
import { Colors } from '../../styles/styles'
import { StyledMenuLink, StyledTabsLink } from '../StyledLink/StyledLink.styled'
import { Tabs } from '../Tabs/Tabs'

const tabsCategories = [
    { id: 'fdhher', name: 'Woman', searchQuery: 'womens' },
    { id: 'fdgjhjktyhher', name: 'Man', searchQuery: 'mens' }
]

interface TabsPanelProps {
    onClick?: () => void,
}

export const TabsPanel: FC<TabsPanelProps> = memo(({onClick}) => {
    const [activeTab, setActiveTab] = useState<number | undefined>()
    const { gender } = useParams()

    const handleLinkClick = (tabPosition: number) => {
        setActiveTab(tabPosition)
        if (onClick) {
            onClick()
        }
    }

    useEffect(() => {
        if (gender) {
         const tabIndex = tabsCategories?.findIndex(item => item.searchQuery === gender)
            
         setActiveTab(tabIndex)
        }
    }, [])

    const renderItemTabs = (item: GenderCategory, index: number, active: boolean) =>
        <StyledTabsLink
            to={`/${item.searchQuery}`}
            onClick={() => handleLinkClick(index)}
            className={active ? 'active' : ''}
            color={Colors.primary}
        >
            {item.name}
        </StyledTabsLink>

    return (
        <Tabs
            categories={tabsCategories}
            renderItem={renderItemTabs}
            value={activeTab}
        />
    )
})
