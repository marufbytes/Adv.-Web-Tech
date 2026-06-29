import { Injectable } from '@nestjs/common';
import { retry } from 'rxjs';

@Injectable()
export class CourseService {

    private courses = [
        { id: '1', name: 'Web Technology', credit: 3, instructor: 'Dr. Rahman' },
        { id: '2', name: 'Data Structure', credit: 3, instructor: 'Dr. Karim' },
        { id: '3', name: 'Artificial Intelligence', credit: 3, instructor: 'Dr. Hasan' },
        { id: '4', name: 'Database Systems', credit: 2, instructor: 'Dr. Alam' },
        { id: '5', name: 'Computer Networks', credit: 3, instructor: 'Dr. Islam' },
    ];

    getAllCourses(){
        return this.courses;
    }

    getCourseByID(id:string){
        const course = this.courses.find(c=>c.id===id);
        if(!course) return 'No course found'!;
        return course;
    }

    creatCourse(){
        return 'course created!'
    }

    updateCourse(id:string):string{
        return `Updated course ${id} from service!`
    }

    patchCouse(id:string):string{
        return `Patch course ${id} forms ervice`;
    }
    
    deleteCourse(id:string):string{
        return `Delete course ${id} from serviee`;
    }


}
