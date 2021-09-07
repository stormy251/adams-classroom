import {Supabase} from '../index';

export const deleteWeek = async (id: string | undefined) => {
    const { data, error } = await Supabase
        .from('weeks')
        .delete()
        .eq('id', id)
};