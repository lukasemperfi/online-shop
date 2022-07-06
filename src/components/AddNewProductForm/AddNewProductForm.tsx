import React from 'react'
import styled, { css } from 'styled-components'
import { Input } from '../Input/Input'
import { MainButton } from '../MainButton/MainButton'

const Form = styled.form`
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const FormTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
`
const Category = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: auto;
`

const CategoryLabel = styled.label`
    font-weight: 500;
`

const TextArea = styled.textarea`
    resize: vertical;
    border: 1px solid;
`

export const AddNewProductForm = () => {
    return (
        <Form>
            <FormTitle>ADD NEW PRODUCT</FormTitle>
            <Category>
                <CategoryLabel htmlFor="category">Category</CategoryLabel>
                <select name="category" id="category">
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                </select>
            </Category>
            <Input
                label='Name'
            />
            <Input
                label='Image URL'
            />
            <Input
                label='Price'
            />
            <CategoryLabel>Description</CategoryLabel>
            <TextArea name="Description" cols={5} rows={5} ></TextArea>
            <MainButton>ADD PRODUCT</MainButton>
        </Form>
    )
}
