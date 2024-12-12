import moment from "moment"

export const dateFormater = (date: string, format: string) => {
    if(moment(date).isValid()){
        return moment(date).format(format)
    }else 
        return null
}