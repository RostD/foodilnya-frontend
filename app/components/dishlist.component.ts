import {Component, OnInit} from "@angular/core";
import {DishesService} from "../services/dishes.service";
import {Dish} from "../classes/dish";
import {TagsService} from "../services/tags.service";
import {Tag} from "../classes/tag";


@Component({
  selector: 'dishlist',
  templateUrl:'app/components/dishlist.component.html',
  styles: [``],
})
export class DishlistComponent implements OnInit{

  /**
   * Дал ли ответ сервер со списком всех блюд
   * @type {boolean}
   */
  private dishesLoading = true;

  /**
   * Список всех блюд
   */
  private dishes: Dish[];

  /**
   * Список используемых блюдами тегов
   */
  private tags: Tag [];
  private tags_copy: Tag[];

  /**
   * Выделенное блюдо
   */
  private selectedDish: Dish;

  /**
   * Максимальный рейтинг блюда
   * @type {number}
   */
  private maxRate = 5;

  /**
   * Параметры фильтра списка блюд
   * @type {{id: string; open: boolean}}
   */
  private toggleFilter =
    {
      id:'dishfilter',
      open: false,
    };

  /**
   * Параметры окна системных оповещений
   * @type {{type: string; text: string; id: string; fadeDelay: number}}
   */
  private alert =
    {
      type:'',
      text: '',
      id: 'alert',
      fadeDelay: 6000,
    };

  /**
   * Параметры, по которым фильтруется список
   * @type {{name: string; tagsAND: any}}
   */
  private filter =
    {
      name:'',
      tagsAND:<any>[],
      tagsOR:<any>[],
    };

  constructor(private dishService: DishesService, private tagsService: TagsService){
  }

  ngOnInit(): void {
    this.getDishes();
    this.getTags();

    $('#'+this.toggleFilter.id).on('show.bs.tooltip',{toggle:this.toggleFilter},function (event) {

      if(event.data.toggle.open){
        return false;
      }
    });
  }

  /**
   * Запрос к серверу на выдачу списка блюд
   */
  getDishes(){
    this.dishService.getDishes().subscribe(
      (dishes) => {
        this.dishes = dishes;
        this.dishesLoading = false;
      },
      (error) => {
        console.log(error);
        this.dishesLoading = false;
        this.showAlert('danger','Ошибка подключения к серверу при загрузке блюд.');
      }
    )
  }

  /**
   * Загружает теги, используемые блюдами
   */
  getTags()
  {
    this.tagsService.usedDish().subscribe(
      (data)=>{
        this.tags = data.json().data;
        this.tags_copy = JSON.parse(JSON.stringify(data.json().data));
      },
      (error)=>{
        this.showAlert('danger','Ошибка подключения к серверу при загрузке тегов.')
      })
  }

  /**
   * Устанавливает выделенное блюдо
   * @param dish
   */
  showDetails(dish: Dish){
    this.selectedDish = dish;
  }

  /**
   * Возвращает стиль, выделяющий строку в таблице блюд
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

  /**
   * Очистка всех фильтров списка
   */
  clearFilters(){
    this.filter.name=null;
    this.clearTags();
  }

  clearFilterName(){
    this.filter.name=null;
    $('#filterName').focus();
  }
  clearTags(){
    this.tags = JSON.parse(JSON.stringify(this.tags_copy));
    this.filter.tagsAND = [];
    this.filter.tagsOR = [];
  }

  /**
   * Устанавливает состояние окна фильра: Открыто\Закрыто
   */
  togglingFilter(){
    this.toggleFilter.open=!this.toggleFilter.open;
    $('#'+this.toggleFilter.id).tooltip('hide');
  }

  /**
   * Показать системное сообщение пользователю
   * @param type
   * @param message
   */
  showAlert(type:string, message:string)
  {
    this.alert.type = 'alert-'+type;
    this.alert.text = message;
    $('#'+this.alert.id).show();
    $('#'+this.alert.id).fadeOut(this.alert.fadeDelay);
  }

  showModal()
  {
    $('#myModal').modal('show');
  }
}
