import { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GenderCategory } from '../../firebase/models/GenderCategory';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Path } from '../../navigation/routeNames';
import { createPath } from '../../navigation/Utils/createPath';
import { GenderSearchQuery, selectFiltersState, setGenderCategory } from '../../store/filtersSlice';
import { Colors } from '../../styles/styles';
import { StyledTabsLink } from '../StyledLink/StyledLink.styled';
import { Tabs } from '../UI/Tabs/Tabs';

const tabsCategories = [
    { id: '1', name: 'Woman', searchQuery: GenderSearchQuery.womens },
    { id: '2', name: 'Man', searchQuery: GenderSearchQuery.mens }
]

interface TabsPanelProps {
    onClick?: () => void,
}

export const TabsPanel: FC<TabsPanelProps> = memo(({ onClick }) => {
    const [activeTab, setActiveTab] = useState<number | undefined>()
    const { gender } = useParams()
    const { genderCategory } = useAppSelector(selectFiltersState)
    const dispatch = useAppDispatch()
    const genderSearchQuery = genderCategory && gender

    const handleLinkClick = (tabPosition: number, genderSearchQuery: GenderSearchQuery) => {
        setActiveTab(tabPosition)
        dispatch(setGenderCategory(genderSearchQuery))
        if (onClick) {
            onClick()
        }
    }

    useEffect(() => {
        if (genderSearchQuery) {
            const tabIndex = tabsCategories?.findIndex(item => item.searchQuery === genderSearchQuery)

            setActiveTab(tabIndex)
        }
    }, [])


    const renderItemTabs = (item: GenderCategory, index: number, active: boolean) =>
        <StyledTabsLink
            to={createPath({
                path: Path.GenderCategory,
                params: { gender: `/${item.searchQuery}` }
            })}
            onClick={() => handleLinkClick(index, item.searchQuery)}
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
