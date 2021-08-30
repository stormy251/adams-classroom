import {Supabase} from '../index';
import {Week} from "../models/week-model";

export const getWeeks = async (): Promise<Week[]> => {
    let {data: weeks, error} = await Supabase.from('weeks').select('*');

    return weeks || [];
};
