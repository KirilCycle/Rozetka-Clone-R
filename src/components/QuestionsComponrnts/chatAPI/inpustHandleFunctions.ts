import { AxiosError, AxiosResponse } from 'axios';
import React, { KeyboardEvent } from 'react';

type handleValueFunctionTypee = (value: string) => void

export interface CustomRes {
   statusText: string
}

type postFnType = (value: string) => Promise<AxiosError<unknown, any> | AxiosResponse<CustomRes, any> | CustomRes>

type postRep = (value: string) => Promise<void>

export async function handlePostThrowButton(value: string, handleValueFunction: handleValueFunctionTypee, postFn: postFnType | postRep , loading: boolean) {

   
   let response = postFn(value)

   handleValueFunction('')
  
   return  await response

 
}

