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
            date_completed: { $date: Date };
            body: String;
            status: String;
            to: String;
        }
    ];
}
