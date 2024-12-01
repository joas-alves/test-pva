import IMeeting from "@/cms-models/meeting";

export interface ITInvestorsPage {
    id: number;
    section1_title: string;
    section1_description: string;
    section1_image: string | undefined | null;
    section1_contact_title: string;
    section1_contact_description: string;
    section1_contact_email: string;
    section1_contact_phone: string;
    section1_contact_address: string;
    section1_overview_title: string;
    section1_overview_current_price: string;
    section1_overview_recent_price: string;
    section1_overview_image: string | undefined | null;
    section2_title: string;
    section2_image: string | undefined | null;
    section2_card1_title: string;
    section2_card1_icon: string | undefined | null;
    section2_card1_bg_color: string;
    section2_card1_description: string;
    section2_card2_title: string;
    section2_card2_icon: string | undefined | null;
    section2_card2_description: string;
    section2_card2_bg_color: string;
    section3_title: string;
    section3_description: string
    section3_bg_image: string | undefined | null;
    created_at: string;
    updated_at: string;
    meetings: IMeeting[];
}
