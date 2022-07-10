// I added strict validator for germany

type licenseValidatorProps = {
    [key:string]:{regex: RegExp, placeholder:string}
}

export const licenseValidator:licenseValidatorProps = {
    germany: { regex:/^[a-zA-Z]{1,3}-[a-zA-Z]{1,2}-\d{1,4}$/, placeholder:"M-KL-8136"},
    france:  {regex:/^(?!ss|ww|kk|pd|pq|qq|wc)[a-hj-np-tv-z]{2}[-][0-9]{3}[-](?!ss|kk|pd|pq|qq|wc)[a-hj-np-tv-z]{2}$/i, placeholder:"AA-001-AA"},
    austria:{regex:/^[a-zA-Z]{1,2}-\d[\w?]{3,6}$/, placeholder:"SZ-510BV"},
    switzerland:{regex:/^[a-zA-Z]{2}-\d{6}$/, placeholder:"SG-197012"},
    strictGermany:{regex:/^(A|AA|AB|ABG|ABI|AC|AE|AH|AIB|AIC|AK|ALF|ALZ|AM|AN|ANA|ANG|ANK|AÖ|AP|APD|ARN|ART|AS|ASL|ASZ|AT|AU|AUR|AW|AZ|B|BA|BAD|BAR|BB|BBG|BC|BCH|BE|BED|BER|BF|BGD|BGL|BH|BID|BIN|BIR|BIT|BIW|BK|BL|BLB|BLK|BM|BN|BNA|BO|BÖ|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BS|BT|BTF|BÜD|BÜR|BUL|BÜS|BÜZ|BZ|C|CA|CAS|CE|CHA|CLP|CLZ|CO|COC|COE|CR|CW|D|DAH|DAN|DBR|DD|DE|DEG|DEL|DGF|DI|DKB|DL|DLG|DM|DO|DON|DU|DUD|DÜW|DW|DZ)-[a-zA-Z]{1,2}-\d{1,4}$/i, placeholder:"M-KL-8136"}

}

 const handleValidator = ({country, license}:{country:"germany" | "france" |"austria" | "switerland" , license:string}) => licenseValidator[country].regex.test(license)


export default handleValidator




