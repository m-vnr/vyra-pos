import { create } from 'zustand';

interface SettingsState {
 gstRate:number;
 serviceCharge:number;
 outletName:string;
 setGstRate:(rate:number)=>void;
 setServiceCharge:(charge:number)=>void;
}

export const useSettingsStore = create<SettingsState>((set)=>( {
 gstRate:5,
 serviceCharge:0,
 outletName:'Vyra POS',
 setGstRate:(gstRate)=>set({gstRate}),
 setServiceCharge:(serviceCharge)=>set({serviceCharge})
}));
