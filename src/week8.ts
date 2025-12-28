interface Profile {
    id: string;
    address: string;
}

type ProfileId = Pick<Profile, 'id'>;