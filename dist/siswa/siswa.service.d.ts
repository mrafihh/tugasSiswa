export interface Siswa {
    nisn: string;
    nama: string;
    alamat: string;
    umur: number;
}
export declare class siswaService {
    private siswa;
    findAll(): Siswa[];
    findOne(nisn: string): Siswa;
    create(s: Siswa): Siswa;
    update(nisn: string, s: Siswa): Siswa;
    remove(nisn: string): void;
}
