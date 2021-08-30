import {Supabase} from '../index';
import {Week} from '../models/week-model';

export const getWeeks = async (): Promise<Week[]> => {
  let {data: weeks, error} = await Supabase.from('weeks').select('*');

  return weeks || [];
};

export const getWeek = async (id: string): Promise<Week | null> => {
  let {data: week, error} = await Supabase.from('weeks')
    .select('*')
    // Filters
    .eq('id', id);

  return week?.[0] || null;
};
