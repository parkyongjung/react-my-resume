import React, { useState } from 'react';
import styled from 'styled-components';

interface InputProps {
  id?: string;
  name?: string;
  children?:  React.ReactNode;
  value?: string;
  check?: string;
}

const Inputstyle = styled.div`
  position:relative;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  text-align: left;
  min-height: 40px;
  width: 100%;
`

const InputLabel = styled.label<InputProps>`
  position: absolute;
  top: ${props => props.check ? '0px' : '15px' };
  color: ${props => props.check ? '#8e44ad' : '#000' };
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  font-weight: 300;
  opacity: 0.5;
  cursor: text;
  transition: 0.2s ease all;
  margin: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 45%;
    height: 2px;
    width: 10px;
    visibility: hidden;
    background-color:#8e44ad;
    transition: 0.2s ease all;
  }
`

const InputText = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  flex: 1;
  padding: 11px 0 2px;
  border: 0;
  background-color: #fff;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: -.02em;
  outline: none;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-bottom: 1px solid #bbb;
  &:focus {
    box-shadow: none;
    border-bottom-color: rgba(0,0,0,0.12);
    & ~ ${InputLabel} {
      top: 0;
      opacity: 1;
      color: #8e44ad;
      font-size: 12px;
      &:after {
        visibility: visible;
        width: 100%;
        left: 0;
      }
    }
  }
`

export const Input = (props: InputProps) => {
  const [value, setValueState] = useState<string>("");

  const valueCheck = (e: React.FormEvent<HTMLInputElement>) => {
    setValueState(`${value}${e.currentTarget.value}`);
    if (!(value === "")) {
      
      console.log('비어있음')
    }
  }
  return (

    <Inputstyle>
      <InputText id={props.id} name={props.name} onChange={valueCheck}/>
      <InputLabel check={value} htmlFor={props.id} >{props.children}</InputLabel>
    </Inputstyle>

  );
};
