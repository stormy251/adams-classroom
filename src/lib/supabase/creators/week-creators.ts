import {Supabase} from '../index';
import {Week} from '../models/week-model';

export const createWeek = async (week: Week) => {
  let {data, error} = await Supabase.from('weeks').insert(week);
};
