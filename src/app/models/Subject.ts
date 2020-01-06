import {TypeOfClasses} from './TypeOfClasses';

interface SubjectRate {
    points: number;
    voters: number;
}

export interface Subject{
/* Specyfikacja potrzeb: kurs opisywany jest za pomocą nazwy OK, punktów ETCS OK, semestru na którym
jest prowadzony OK, formy prowadzonych zajęć (wykład, ćwiczenia, lab, projekt) OK, max ilości studentów NIE!
(przyjmijmy, ze każdy kurs jest obieralny), aktualnej oceny kursu (od 1 do 5 gwiazdek).
Dodatkowo kurs będzie miał też skojarzoną ikonę (obrazek) pełniący role avatara oraz krótką sekcje
opisująca zawartość kursu. */
  id?: string,
  name: string,
  ects: number,
  semester: number,
  type?: TypeOfClasses,
  maxStudents?: number,
  teacher: string,
  rankStat: SubjectRate, //ocena
  difficultyStat: SubjectRate, //poziom trudności
  hasDetails?: boolean,
  details?: string,
  pictureAddres?: string
}