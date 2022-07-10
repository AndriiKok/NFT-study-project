import { Button, Paper } from '@mantine/core';
import { LitButton } from './Button';
import { Armchair } from 'tabler-icons-react';

export const ButtonTesting = () => {
    return (
        <div>

            <Paper shadow="sm" p="lg">
            <Button >Normal Mantine Core Button</Button>
                <Button loading={true}>Mantine Core Button</Button>
                <LitButton variantType='primary' loading={true}>Button</LitButton>
                <LitButton variantType='primary' loading={true}>Button</LitButton>
                <LitButton variantType='primary'>Button</LitButton>
                <LitButton variantType='primary' disabled={true}>Button</LitButton>
                <LitButton variantType='secondary'>Button</LitButton>
                <LitButton variantType='secondary' disabled={true}>Button</LitButton>
                <LitButton variantType='subtle'>Button</LitButton>
                <LitButton variantType='subtle' disabled={true}>Button</LitButton>
                <LitButton variantType='text'>Button</LitButton>
                <LitButton variantType='text' disabled={true}>Button</LitButton>
                <LitButton variantType='primary' leftIcon={<Armchair />}>Button</LitButton>
            </Paper>


        </div>
    )
}
