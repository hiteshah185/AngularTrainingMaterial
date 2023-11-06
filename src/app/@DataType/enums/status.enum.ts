enum STATUS{
    ACTIVE = "Active",
    INACTIVE ="Inactive",
    SUSPENDED ="Suspended"
}
enum Teams{
    CMS ="CMS",
    Recovery ="RECOVERY",
    FM = "Foster Moore"
}

export type TeranetTeamStrength ={
    [key in Teams]:number
}