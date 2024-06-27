export default function canIterate(obj) {
    if (obj !==null && Symbol.iterator in Object(obj)) {
        return true;
    }
    return false;
}