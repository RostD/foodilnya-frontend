import {Component, OnInit} from "@angular/core";
import {DishesService} from "../services/dishes.service";
import {Dish} from "../classes/dish";


@Component({
  selector: 'dishlist',
  templateUrl:'app/components/dishlist.component.html',
  styles: [``],
})
export class DishlistComponent implements OnInit{
  private dishes: Dish[];
  private selectedDish: Dish;
  private loading = true;
  private filterName:string = null;
  private maxRate = 5;
  private toggleFilter = {
    id:'dishfilter',
    open: false,
  };

  constructor(private dishService: DishesService){

  }
  ngOnInit(): void {
    this.getDishes();
   $('#'+this.toggleFilter.id).on('show.bs.tooltip',{toggle:this.toggleFilter},function (event) {

      if(event.data.toggle.open){
        return false;
      }
    });
  }
  getDishes(){
    this.dishService.getDishes().subscribe(
      (dishes) => {
        dishes = this.dishes = dishes;
        this.loading = false;
      }
    )
  }

  /**
   * Возвращает слить, выделяющий строку в таблице блюд
   * @param id
   * @returns string
   */
  getClass(id:number){
    if(this.selectedDish){

      if(this.selectedDish.id == id)
        return 'bg-info text-white';
      else
        return '';
    }
    else
      return'';

  }

  showDetails(dish: Dish){
    this.selectedDish = dish;
  }

  clearFilters(){
    this.filterName=null;
  }

  clearFilterName(){
    this.filterName=null;
    $('#filterName').focus();
  }

  togglingFilter(){
    this.toggleFilter.open=!this.toggleFilter.open;
    $('#'+this.toggleFilter.id).tooltip('hide');
  }
}
