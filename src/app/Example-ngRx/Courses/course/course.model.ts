function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

export interface Course {
    id: number;
    seqNo: number;
    url: number;
    iconURL: string;
    courseListIcon: string;
    longDescription: string;
    category: string;
    lessonCount: number;
    promo: boolean;
}
export function compareEntity<Type extends Course>(courseA: Type, courseB: Type) {
    const compare: number = courseA.seqNo - courseB.seqNo;
    return compare > 0 ? 1 : compare < 0 ? -1 : 0;
}
export interface Lesson {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}
export function compareLessons<Type extends Lesson>(lesson1: Type, lesson2: Type): number {
    const compareCourses = lesson1.courseId - lesson2.courseId;
    return compareCourses > 0 ? 1 : compareCourses < 0 ? -1 : lesson1.seqNo - lesson2.seqNo;
}