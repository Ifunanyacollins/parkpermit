export const licenseValidator = {
    germany: /^[a-zA-Z]{1,3}-[a-zA-Z]{1,2} \d{1,4}$/,
    france:  /^(?!ss|ww|kk|pd|pq|qq|wc)[a-hj-np-tv-z]{2}[ -]?[0-9]{3}[ -]?(?!ss|kk|pd|pq|qq|wc)[a-hj-np-tv-z]{2}$/i,
    austria:/^[a-zA-Z]{1,2}-\d{3,6}$/,
    switzerland:/^[a-zA-Z]{2}-\d{6}$/

}

 const handleValidator = ({country, license}:{country:string, license:string}) => licenseValidator["germany"].test('AS-R 340')


export default handleValidator