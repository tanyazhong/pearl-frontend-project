export interface Message {
    _id: { $oid: String };
    first_name: String;
    last_name: String;
    contact_info: { phone: String };
    last_inbound_date: { $date: Date };
    messages: [
        {
            from_: String;
            twilio_message_sid: String;
            twilio_account_sid: String;
            date_completed: Date;
            body: String;
            status: String;
            to: String;
        }
    ];
}

class Msg implements Message {
    _id: { $oid: String };
    first_name: String;
    last_name: String;
    contact_info: { phone: String };
    last_inbound_date: { $date: Date };
    messages: [
        {
            from_: String;
            twilio_message_sid: String;
            twilio_account_sid: String;
            date_completed: Date;
            body: String;
            status: String;
            to: String;
        }
    ];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    /*
        _id: String;
        first_name: String;
        last_name: String;
        contact_info: String;
        last_inbound_date: Date;
        from_: String;
        twilio_message_sid: String;
        twilio_account_sid: String;
        date_completed: Date;
        body: String;
        status: String;
        to: String;
    
        constructor($oid: String, first_name: string, last_name: String, phone_number: String, last_inbound_date: Date,
            from_: String, tms: String, tas: String, date_completed: Date, body: String, status: String, to: String) { 
            this._id = $oid;
            this.first_name = first_name;
            this.last_name = last_name;
            this.contact_info = phone_number;
            this. last_inbound_date = last_inbound_date;
            this.from_ = from_;
            this.twilio_message_sid = tms;
            this.twilio_account_sid = tas;
            this.date_completed = date_completed;
            this.body = body;
            this.status = status;
            this.to = to;
    }
    */
}
