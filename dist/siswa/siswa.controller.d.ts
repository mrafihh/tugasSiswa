import * as siswaService from './siswa.service';
export declare class siswaController {
    private readonly ss;
    constructor(ss: siswaService.siswaService);
    getAllTodos(): siswaService.Siswa[];
    getTodoById(nisn: string): siswaService.Siswa;
    createTodo(s: siswaService.Siswa): siswaService.Siswa;
    updateTodo(nisn: string, s: siswaService.Siswa): siswaService.Siswa;
    removeTodo(nisn: string): void;
}
