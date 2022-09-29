import { I18nString } from "../base";

export interface SiteInfoRequest {
    connections: SiteInfoSite[];
    api_version: string;
}

export interface SiteInfoSite {
    uid: string,
    name: string,
    names: I18nString,
    api_version: string,
    resources: SiteInfoResource[],
    last_seen: string
}

export interface SiteInfoResource {
    type: string,
    attribute: string,
    begin_date: string,
    end_date: string,
    datatype: string
}
