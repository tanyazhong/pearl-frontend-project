export interface Message {
    _id: { $oid: string };
    first_name: string;
    last_name: string;
    contact_info: { phone: string };
    last_inbound_date: { $date: Date };
    messages: [
        {
            from_: string;
            twilio_message_sid: string;
            twilio_account_sid: string;
            date_completed: { $date: Date };
            body: string;
            status: string;
            to: string;
        }
    ];
}
