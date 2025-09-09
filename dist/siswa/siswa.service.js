"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.siswaService = void 0;
const common_1 = require("@nestjs/common");
let siswaService = class siswaService {
    siswa = [
        { nisn: "1234", nama: "haikal", alamat: "Sidoarjo", umur: 17 }
    ];
    findAll() {
        return this.siswa;
    }
    findOne(nisn) {
        const siswa = this.siswa.find((item) => item.nisn == nisn);
        if (!siswa)
            throw new common_1.NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
        return siswa;
    }
    create(s) {
        this.siswa.push(s);
        return s;
    }
    update(nisn, s) {
        const siswa = this.findOne(nisn);
        Object.assign(siswa, s);
        return siswa;
    }
    remove(nisn) {
        const index = this.siswa.findIndex((item) => item.nisn === nisn);
        if (index === -1)
            throw new common_1.NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
        this.siswa.splice(index, 1);
    }
};
exports.siswaService = siswaService;
exports.siswaService = siswaService = __decorate([
    (0, common_1.Injectable)()
], siswaService);
//# sourceMappingURL=siswa.service.js.map