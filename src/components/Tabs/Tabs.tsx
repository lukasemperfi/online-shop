import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledTabs = styled.div`
    display: flex;
    gap: 20px;
`

interface TabsProps<T> {
    categories: T[],
    renderItem: (item: T, index: number, active: boolean) => ReactNode,
    value?: number,
}

export const Tabs = <T,>({ categories, renderItem, value }: TabsProps<T>) => {
    const [activeTab, setActiveTab] = useState(value)

    useEffect(() => {
        setActiveTab(value)
    }, [value])

    return (
        <StyledTabs>
            {categories?.map((item, index) => {
                const isActive = activeTab === index;

                return (
                    <React.Fragment key={index}>
                        {renderItem(item, index, isActive)}
                    </React.Fragment>
                )
            }
            )}
        </StyledTabs>
    )
}
